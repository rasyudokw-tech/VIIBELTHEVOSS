const text = "Welcome To VII BELTHEVOS";
const typingText = document.getElementById("typing-text");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typingText) {
    if (prefersReducedMotion) {
        typingText.textContent = text;
    } else {
        let index = 0;

        function typeNextCharacter() {
            if (index >= text.length) return;

            typingText.textContent += text[index];
            index += 1;
            window.setTimeout(typeNextCharacter, 100);
        }

        typeNextCharacter();
    }
}

