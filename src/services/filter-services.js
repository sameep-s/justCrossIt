export function filterPriority(notesList, priority) {
    if (priority.length) {
        return notesList.filter((item) => priority.includes(item.priority))
    }

    return notesList;
}

export function filterColor(notesList, color) {
    if (color.length) {
        return notesList.filter((item) => color.includes(item.backgroundColor));
    }

    return notesList;
}


export function filterLabel(noteList, label) {
    if (label.length) {
        return noteList.filter((item) => {
            for (let i = 0; i < item.labels.length; i++) {
                if (label.includes(item.labels[i])) return item;
            }
        })
    }

    return noteList;
}