
    const itemsHighlights = document.querySelectorAll('.hgs-post')
    const btnViewMore = document.querySelector('.btn-view-more')
    let divItems = []
    let pageActual = 1

    init()
    console.log(itemsHighlights)

    function init() {
        itemsHighlights.forEach(e => {divItems.push(e)})
        generateItemsQuantity(itemsHighlights, pageActual)
        initButtonEvent()
    }

    function generateItemsQuantity(items, pageActual) {
        listItems(items, pageActual, 4)
    }

    function listItems(items, pageActual, limitItems) {
        let result = []
        let totalPage = Math.ceil(items.length / limitItems)
        let count = (pageActual * limitItems) - limitItems
        let delimiter = count + limitItems

        if (pageActual <= totalPage) {
            for(let i=count; i<delimiter; i++) {
                result.push(items[i])
                count++
            }
        }

        result.forEach(e => {
            console.log(e.classList)
            e.classlist.add('show-post-container')
        })
    }

    function initButtonEvent() {
        nextPage()
    }

    function nextPage() {
        btnViewMore.addEventListener('click', () => {
            pageActual++
            generateItemsQuantity(itemsHighlights, pageActual)
        })
    }