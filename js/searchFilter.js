function searchFilter() {
    let filter = document.getElementById('search').value.toLowerCase();
    for (let i = 0; i < 12; i++) {
        let caption = document.getElementsByTagName('a')[i].getAttribute('data-caption').toLowerCase();
        if (!caption.includes(filter))
            document.getElementsByTagName('a')[i].style.display = 'none';
        else
            document.getElementsByTagName('a')[i].style.display = 'block';
    }
}

document.getElementById('search').addEventListener('input', searchFilter);