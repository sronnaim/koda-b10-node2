import { stdin, stdout } from "node:process";
import readline from "node:readline/promises";
import moment from "moment";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

async function ask(question) {
  const answer = await rl.question(question + "\n> ");
  return answer.trim();
}

function useSlash(date) {
  if (!(date instanceof Date)) return "";

  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

async function main() {
  while (true) {
    const answer = await ask("Tulis tanggal dengan format dd-mm-yyyy:");

    let isValid = true;

    if (answer[2] !== "-" || answer[5] !== "-" || answer.length < 6) isValid = false;

    const digits = answer.split("-");
    const day = Number(digits[0]);
    const month = Number(digits[1]);
    const year = Number(digits[2]);

    if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) isValid = false;

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 0 || year > 3000) isValid = false;

    if (!isValid) {
      console.log("Format tanggal salah");
      continue;
    }

    const date = new Date(answer);

    if (Number.isNaN(date.valueOf())) continue;

    console.log(useSlash(date));
    break;
  }

  rl.close();
}

async function mainMoment() {
  while (true) {
    const answer = await ask("Tulis tanggal dengan format dd-mm-yyyy:");

    const dateMmt = moment(answer, "DD-MM-YYYY", true);

    if (!dateMmt.isValid()) {
      console.log("Format tanggal salah");
      continue;
    }

    console.log(dateMmt.format("DD/MM/YYYY"));
    break;
  }
  rl.close();
}

// main();
mainMoment();
