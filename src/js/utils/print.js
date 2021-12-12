const resultParagraph = document.querySelector('.output')

export const printError = (errorText, node) => (
    node.innerHTML = `
        <span style="color: red;">
            ${errorText}
        </span>
    `
)

export const printDateDiff = ({years, months, days}) => (
    resultParagraph.innerHTML = `
        Годы: ${years}
        Месяцы: ${months}
        Дни: ${days}
    `
)
