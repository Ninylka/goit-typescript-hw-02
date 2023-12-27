/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeeksDay {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday,

}

function isWeekend (day: WeeksDay): boolean {

return (
  day === WeeksDay.Saturday || day === WeeksDay.Sunday
)
}


