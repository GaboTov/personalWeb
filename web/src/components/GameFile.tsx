import React, { useEffect, useRef, useState } from "react";

export default function GameLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boardRef = useRef<number[][]>();
  const cellSize = 50; // Tamaño de cada celda en píxeles
  const width = 40; // Ancho del tablero en celdas
  const height = 38; // Alto del tablero en celdas

  const initialBoard = () => {
    let board: number[][] = [];
    for (let i = 0; i < height; i++) {
      board[i] = [];
      for (let j = 0; j < width; j++) {
        board[i][j] = Math.random() < 0.15 ? 1 : 0;
      }
    }
    return board;
  };

  const [board, setBoard] = useState<number[][]>(initialBoard());

  function drawBoard(ctx: CanvasRenderingContext2D, board: number[][]) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Limpiar el canvas

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const value = board[i][j];
        ctx.fillStyle = value === 1 ? "#0f172b69" : "white";
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  }
  function calculateNextBoard(currentBoard: number[][] | undefined) {
    if (!currentBoard) {
      return [];
    }
    const newBoard = currentBoard.map((row, i) =>
      row.map((cell, j) => {
        const numNeighbors = countNeighbors(currentBoard, i, j);
        if (cell === 1 && (numNeighbors < 2 || numNeighbors > 3)) {
          return 0; // Muere por soledad o sobrepoblación
        }
        if (cell === 0 && numNeighbors === 3) {
          return 1; // Nace una nueva célula
        }
        return cell; // Permanece en el mismo estado
      })
    );
    return newBoard;
  }

  function countNeighbors(board: number[][], x: number, y: number) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Saltar la propia celda
        const newX = x + i;
        const newY = y + j;
        if (
          newX >= 0 &&
          newX < board.length &&
          newY >= 0 &&
          newY < board[0].length
        ) {
          count += board[newX][newY];
        }
      }
    }
    return count;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newBoard = calculateNextBoard(boardRef.current);
      setBoard(newBoard);
    }, 1600);

    return () => clearInterval(interval);
  }, []); // Vacío para que solo se ejecute una vez

  // Dibujar el tablero
  useEffect(() => {
    boardRef.current = board; // Actualiza la referencia con el último estado del tablero

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width * cellSize;
    canvas.height = height * cellSize;

    const context = canvas.getContext("2d");
    if (!context) return;

    drawBoard(context, board);
  }, [board]);

  return (
    <div className="gameContainer">
      <canvas ref={canvasRef}></canvas>;
    </div>
  );
}
