async function read(file, solveFn) {
    return await fetch(file)
        .then(response => response.text())
        .then(solveFn);
}