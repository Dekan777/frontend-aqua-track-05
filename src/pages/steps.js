const steps = [
    {
        selector: '[data-tour="1"]',
        content: "text 1",
        highlightedSelectors: [".ReactModal__Content"],
        mutationObservables: [".ReactModal__Overlay"]
    },
    { selector: '[data-tour="2"]', content: "text 2" },

];

export default steps;
