async function read(file, solveFn) {
    return await fetch(file)
        .then(response => response.text())
        .then(data => {
            return solveFn(data.split("\n"));
        });
}