function app() {
    const
        filters = document.querySelectorAll(".filter"),
        cards = document.querySelectorAll('.card');

    filters.forEach(filter => {
        let filterName = filter.dataset.filterName;

        filter.querySelectorAll(".button").forEach(btn => {
            btn.addEventListener("click", function () {
                if (btn.dataset.filter === "all") {
                    cards.forEach(card => {
                        card.classList.remove('hide');
                        card.classList.remove('anime');
                    });
                } else {
                    cards.forEach(card => {
                        card.classList.remove('hide');
                        card.classList.remove('anime');
                        if (card.dataset[filterName] === btn.dataset.filter) {
                            card.classList.remove('hide');
                            card.classList.remove('anime');
                        } else {
                            card.classList.add('anime');
                            card.classList.add('hide');
                        }
                    });
                }
            });
        });
    });
}

app();