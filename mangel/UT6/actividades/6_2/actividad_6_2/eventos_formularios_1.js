document.addEventListener("DOMContentLoaded", function () {
    
    attachFileInputHandler('image', 'imgPreview');
})

function encodeFileAsURL(file, callback) {
    if (file) {
        const fileURL = URL.createObjectURL(file);
        callback(fileURL);
    } else {
        console.error('No file provided or file is invalid.');
    }
}

function handleFileInputChange(event, previewElementId) {
    const file = event.target.files[0];
    encodeFileAsURL(file, function(fileURL) {
        document.getElementById(previewElementId).src = fileURL;
    });
}

function attachFileInputHandler(inputElementId, previewElementId) {
    document.getElementById(inputElementId).addEventListener('change', function(event) {
        handleFileInputChange(event, previewElementId);
    });
}