const filterFormIssues = (fields, request_data) => {
    // try to filter issues

    if (!request_data) {
        return {}
    }


    let issues = {}





    for (let each_field in fields) {
        let info = request_data[each_field]

        if (!info) {
            continue
        }


        if (Array.isArray(info)) {
            issues[each_field] = info[0]
        } else {
            issues[each_field] = "please resolve your input"
        }

    }

    return issues
}


const ellipsizeText = (text, length = 48) => {
    if (text.length <= length) {
        return text
    }

    return text.slice(0, length) + '...'
}

const capitalizeText = (text) => {
    if (text.length <= 0) {
        return text
    }

    return text.substring(0, 1).toUpperCase() + text.substring(1, )
}
export { filterFormIssues, ellipsizeText, capitalizeText }