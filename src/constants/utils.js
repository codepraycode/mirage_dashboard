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
export { filterFormIssues }