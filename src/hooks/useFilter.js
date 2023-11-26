import { useRef, useState } from "react";

export const useFilter = (items) => {
    const [filter, setFilter] = useState('all');

    const showPendings = () => {
        setFilter('pending');
    }

    const showDone = () => {
        setFilter('done');
    }

    const filterItems = () => {
        switch (filter) {
            case 'pending':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items;
        }
    }

    return {
        setFilter,
        showPendings,
        showDone,
        filterItems,
    }
}
