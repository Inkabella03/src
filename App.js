import React from 'react';

const data = [
  { no: 1, name: 'nana', course: 'Kalkulus', score: 98 },
  { no: 2, name: 'nono', course: 'Kalkulus', score: 90 },
  { no: 3, name: 'dipta', course: 'Kalkulus', score: 89 },
  { no: 4, name: 'rayn', course: 'Kalkulus', score: 85 },
  { no: 5, name: 'ruby', course: 'Kalkulus', score: 90 },
  { no: 6, name: 'vodka', course: 'Kalkulus', score: 75 },
  { no: 7, name: 'ruby', course: 'Kalkulus', score: 80},
  { no: 8, name: 'rajen', course: 'Kalkulus', score: 60},
  { no: 9, name: 'bui', course: 'Kalkulus', score: 45 },
  { no: 10, name: 'vallery', course: 'Kalkulus', score: 50 },
 
 
 
 
 
 
 
 
 
 
];

function handleIndexScore(score) {
    if (score >= 80) return "A";
    if (score >= 70 && score < 80) return "B";
    if (score >= 60 && score < 70) return "C";
    if (score >= 50 && score < 60) return "D";
    return "E";
}

const Table = () => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAMA</th>
                    <th>MATA KULIAH</th>
                    <th>NILAI AKHIR</th>
                    <th>INDEKS NILAI</th>
                </tr>
            </thead>
            <tbody>
                {data.map(res => (
                    <tr key={res.no}>
                        <td>{res.no}</td>
                        <td>{res.name}</td>
                        <td>{res.course}</td>
                        <td>{res.score}</td>
                        <td className="py-4 px-6">{handleIndexScore(res.score)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
