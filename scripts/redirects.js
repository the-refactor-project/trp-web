const { appendFile } = require("node:fs/promises");

const studentsNames = [
  "abel-guevara",
  "alvaro-camacho",
  "anna-marrodan",
  "berenguer-pou",
  "clara-marsango",
  "cristian-bermudez",
  "david-pegueroles",
  "ivan-sanchez",
  "joaquin-godoy",
  "marc-girbau",
  "maria-del-mar-cegarra",
];
const courseName = "solid";
const redirectRules = [];

for (const studentName of studentsNames) {
  const filename = `${courseName}-${studentName}.pdf`;
  const certificateSource = `/certificados/${filename}`;
  const certificateTarget = `https://refactorproject.s3.eu-north-1.amazonaws.com/certificados/${filename}`;
  redirectRules.push(`${certificateSource} ${certificateTarget} 301`);
}

appendFile("./public/_redirects", "\n" + redirectRules.join("\n"));
