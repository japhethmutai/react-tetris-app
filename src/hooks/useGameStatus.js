import { useState, useEffect, useCallback } from 'react';

const linePoints = [40, 100, 300, 1200];

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const calcScore = useCallback(() => {
        // We have score and set
        if (rowsCleared > 0) {
            // This is how original Tetris score is calculated
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }
    }, [level, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
}