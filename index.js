document.addEventListener('DOMContentLoaded', function() {
    const dtElement = document.getElementById('live-datetime');
    
    function updateDateTime() {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        };
        dtElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
});





const colorBtn = document.getElementById('color-btn');
const colors = ['#fbf0f3', '#e4cfd5', '#f7e7eb', '#ffffff', '#f2dfe4'];
let colorIndex = 0;

colorBtn.addEventListener('click', function() {
    document.body.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

});