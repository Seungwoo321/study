function refresh () {
    const textContent = document.getElementById('editor-textarea').value;  
    document.getElementById('viewer').srcdoc = textContent;
}

