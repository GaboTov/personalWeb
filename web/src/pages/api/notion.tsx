// import type { NextApiRequest, NextApiResponse } from 'next'
// import { Client } from '@notionhq/client'
// import { ExperienceType } from '@/types/types'
// type ResponseData = GetData[] | string
// type GetData = {
//   title: string
//   img: string
// }
// type Tec = {
//   id: string,
//   name: string,
//   color: string
// }
// const dataBaseId = process.env.DATABASE_ID
// const notionKey = process.env.NOTION_KEY
// const notion = new Client({ auth: notionKey })
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   if (!notionKey || !dataBaseId) throw new Error("Not key or database id")
//   const query = { database_id: dataBaseId }
//   const getData = await notion.databases.query(query)
//   const results: ExperienceType[] = getData.results.map(page => {
//     // @ts-ignore
//     const { properties } = page
//     const { title, img, exp, tec, position, content, link } = properties
//     return {
//       position: position.select.name,
//       title: title.title[0].plain_text,
//       img: img.files[0].file.url,
//       exp: exp.date.start,
//       tec: tec.multi_select.map((t: Tec) => (t.name)),
//       content: content.rich_text[0].text.content,
//       link: link.url
//
//     }
//   })
//   res.status(200).json(results)
// }
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'
import { ExperienceType } from '@/types/types'

type ResponseData = ExperienceType[] | string

const dataBaseId = process.env.DATABASE_ID
const notionKey = process.env.NOTION_KEY
const notion = new Client({ auth: notionKey })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (!notionKey || !dataBaseId) {
    res.status(500).json("Not key or database id")
    return
  }

  const startCursor = req.query.startCursor as string | undefined
  try {
    const response = await notion.databases.query({
      database_id: dataBaseId,
      start_cursor: startCursor,
      page_size: 6  // Limita los resultados a 6
    })

    const results: ExperienceType[] = response.results.map(page => {
      // @ts-ignore
      const { properties } = page
      const { title, img, exp, tec, position, content, link } = properties
      return {
        position: position.select.name,
        title: title.title[0].plain_text,
        img: img.files[0].file.url,
        exp: exp.date.start,
        tec: tec.multi_select.map((t: any) => (t.name)),
        content: content.rich_text[0].text.content,
        link: link.url
      }
    })

    res.status(200).json({ results, next_cursor: response.next_cursor })
  } catch (error) {
    res.status(500).json("Error querying Notion API")
  }
}
