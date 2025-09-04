document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Process Section Interaction
    const processFlow = document.querySelector('.process-flow');
    if (processFlow) {
        // Create a line element to connect steps
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.top = '50%';
        line.style.left = '0';
        line.style.width = '0%';
        line.style.height = '1px';
        line.style.backgroundColor = 'var(--color-accent)';
        line.style.transition = 'width 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
        line.style.zIndex = '0';
        processFlow.style.position = 'relative';
        processFlow.appendChild(line);

        processFlow.addEventListener('mouseover', () => {
            const firstStep = processFlow.querySelector('.process-step:first-child');
            const lastStep = processFlow.querySelector('.process-step:last-child');
            if (firstStep && lastStep) {
                const startX = firstStep.offsetLeft + firstStep.offsetWidth / 2;
                const endX = lastStep.offsetLeft + lastStep.offsetWidth / 2;
                line.style.left = `${startX}px`;
                line.style.width = `${endX - startX}px`;
            }
        });

        processFlow.addEventListener('mouseout', () => {
            line.style.width = '0%';
        });
    }

    // Contact Section Background Slider
    const slides = document.querySelectorAll('.contact-bg-slide');
    let currentSlide = 0;
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '1';
        }, 7000); // 7초 간격
    }
});
