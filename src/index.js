const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    const submission = Object.fromEntries(new FormData(event.target));
    console.log(submission);
});

