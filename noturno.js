// Modo noturno
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        
        // Verificar se há preferência salva
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Modo Claro';
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Modo Claro';
                localStorage.setItem('darkMode', 'true');
            } else {
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Modo Noturno';
                localStorage.setItem('darkMode', 'false');
            }
        });