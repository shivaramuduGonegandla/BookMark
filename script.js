document.addEventListener('DOMContentLoaded', function() {
    const bookmarkForm = document.getElementById('bookmarkForm');
    const siteNameInput = document.getElementById('siteNameInput');
    const siteUrlInput = document.getElementById('siteUrlInput');
    const siteNameErrMsg = document.getElementById('siteNameErrMsg');
    const siteUrlErrMsg = document.getElementById('siteUrlErrMsg');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const siteNameValue = siteNameInput.value.trim();
        const siteUrlValue = siteUrlInput.value.trim();

        if (!siteNameValue && !siteUrlValue) {
            siteNameErrMsg.textContent = 'Site name is required.';
            siteUrlErrMsg.textContent = 'Site URL is required.';
        } else if (!siteNameValue) {
            siteNameErrMsg.textContent = 'Site name is required.';
            siteUrlErrMsg.textContent = '';
        } else if (!siteUrlValue) {
            siteNameErrMsg.textContent = '';
            siteUrlErrMsg.textContent = 'Site URL is required.';
        } else {
            siteNameErrMsg.textContent = '';
            siteUrlErrMsg.textContent = '';

            const bookmarkItem = document.createElement('li');
            const bookmarkLink = document.createElement('a');
            bookmarkLink.textContent = siteNameValue;
            bookmarkLink.href = siteUrlValue;
            bookmarkLink.target = '_blank';

            bookmarkItem.appendChild(bookmarkLink);
            bookmarksList.appendChild(bookmarkItem);

            siteNameInput.value = '';
            siteUrlInput.value = '';
        }
    });

    siteNameInput.addEventListener('input', function() {
        if (!siteNameInput.value.trim()) {
            siteNameErrMsg.textContent = 'Site name is required.';
        } else {
            siteNameErrMsg.textContent = '';
        }
    });

    siteUrlInput.addEventListener('input', function() {
        if (!siteUrlInput.value.trim()) {
            siteUrlErrMsg.textContent = 'Site URL is required.';
        } else {
            siteUrlErrMsg.textContent = '';
        }
    });
});