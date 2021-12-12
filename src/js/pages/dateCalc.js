import { printError, printDateDiff } from '../utils/print.js'
import { getDateDiff } from '../utils/getDateDiff.js'

const form = document.getElementById("calcDate")

if (form) {
    form.onsubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(form)

        const dateFrom = formData.get("dateFrom")
        const dateTo = formData.get("dateTo")

        if (!dateFrom || !dateTo) {
            printError('Ошибка, заполните оба поля!', document.querySelector('.output'))

            return
        }

        const dateDiff = getDateDiff(dateFrom, dateTo)

        printDateDiff(dateDiff)
    }
}
