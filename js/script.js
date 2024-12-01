document.addEventListener('DOMContentLoaded', function() {
    const lightSwitch = document.getElementById('light-toggle');
    const light = document.querySelector('.light');
    const body = document.body;

    lightSwitch.addEventListener('change', function() {
        if (lightSwitch.checked) {
            light.classList.add('light-on'); // Turn light on
        } else {
            light.classList.remove('light-on'); // Turn light off
        }
    });
});
