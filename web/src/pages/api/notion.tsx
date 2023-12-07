import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'
import { ExperienceType } from '@/types/types'
type ResponseData = GetData[] | string
type GetData = {
  title: string
  img: string
}
type Tec = {
  id: string,
  name: string,
  color: string
}
const dataBaseId = process.env.DATABASE_ID
const notionKey = process.env.NOTION_KEY
const notion = new Client({ auth: notionKey })
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!notionKey || !dataBaseId) throw new Error("Not key or database id")
  const query = { database_id: dataBaseId }
  const getData = await notion.databases.query(query)
  const results: ExperienceType[] = getData.results.map(page => {
    // @ts-ignore
    const { properties } = page
    const { title, img, exp, tec, position, content, link } = properties
    return {
      position: position.select.name,
      title: title.title[0].plain_text,
      img: img.files[0].file.url,
      exp: exp.date.start,
      tec: tec.multi_select.map((t: Tec) => (t.name)),
      content: content.rich_text[0].text.content,
      link: link.url

    }
  })
  res.status(200).json(results)
}
