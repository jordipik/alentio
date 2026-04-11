let cookiesDisclaimerDiv = null;
let cookiesDisclaimerButton = null;
let cookiesDisclaimerModalWrapper = null;
let cookiesDisclaimerModal = null;
let cookiesDisclaimerModalCloseButton = null;
let cookiesDisclaimerModalAcceptButton = null;
let cookiesDisclaimerRejectButton = null;
let cookiesPolicyAccess = null;
let googleMapsIframe = null;
let googleMapsAcceptCookiesButton = null;
let googleMapsNoCookiesDiv = null;


let contactForm = null;
let validStringRegex = /^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1\.\,\:\;\%\!\"\@\#\~\&\/\(\)\=\?\¿\¡]+(\s*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1\.\,\:\;\%\!\"\@\#\~\&\/\(\)\=\?\¿\¡]*)*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1\.\,\:\;\%\!\"\@\#\~\&\/\(\)\=\?\¿\¡]+$/g;

function init()
{
    initCookiesDisclaimerElements();
    evalAgreementCookie();
    enableContactForm();
}

function enableContactForm()
{
    contactForm = document.getElementById('contactForm');

    contactForm.name.disabled = false;
    contactForm.content.disabled = false;
    contactForm.acceptConditions.disabled = false;
    contactForm.submit.disabled = false;

    contactForm.name.addEventListener('change', validateName);
    contactForm.content.addEventListener('change', validateBody);

    contactForm.addEventListener('submit', function (event)
    {

        event.preventDefault();

        if (
            !validateInput(contactForm.name, validStringRegex, 3, 60)
            || !validateInput(contactForm.content, validStringRegex, 3, 60000)
        )
        {
            event.preventDefault();
            alert(contactForm.errorForm.value);
            return false;
        }

        if (
            !contactForm.acceptConditions.checked
        )
        {
            event.preventDefault();
            alert(contactForm.errorConditions.value);
            return false;
        }

        let message = 'Name: ' + contactForm.name.value + '\r\nMessage: ' + contactForm.content.value;
        message = message.replace(/ /g, ' ');

        let subject = contactForm.subject.value.replace(/ /g, ' ');
        let to = contactForm.to.value;

        window.location.replace("mailto:" + to + "?body=" + message + "&subject=" + subject);

        return false;
    });
}

function validateName(event)
{
    return validateInput(event.target, validStringRegex, 3, 60);
}

function validateBody(event)
{
    return validateInput(event.target, validStringRegex, 3, 60000);
}

function validateInput(input, regex, minLength, maxLength)
{
    input.classList.remove('invalid');
    if (!input.value.trim().match(regex) || input.value.trim().length < minLength || input.value.trim().length > maxLength)
    {
        input.classList.add('invalid');
        return false;
    }

    return true;
}

function initCookiesDisclaimerElements()
{
    googleMapsIframe = document.getElementById('mapcanvas');
    cookiesDisclaimerModalWrapper = document.getElementsByClassName('modal-wrapper')[0];
    cookiesDisclaimerModal = cookiesDisclaimerModalWrapper.getElementsByClassName('modal')[0];
    cookiesDisclaimerDiv = document.getElementsByClassName('cookies-disclaimer')[0];
    cookiesDisclaimerButton = document.getElementsByClassName('cookies-disclaimer-button accept')[0];
    cookiesDisclaimerButton.onclick = agreeCookies;
    cookiesDisclaimerRejectButton = document.getElementsByClassName('cookies-disclaimer-button reject')[0];
    cookiesDisclaimerRejectButton.onclick = rejectCookies;

    googleMapsNoCookiesDiv = document.getElementsByClassName('google-maps-no-cookies')[0];
    googleMapsAcceptCookiesButton = document.getElementsByClassName('google-maps-accept-cookies')[0];
    googleMapsAcceptCookiesButton.onclick = agreeCookies;


    cookiesDisclaimerModalWrapper.onclick = hideCookiesDisclaimerModal;
    cookiesDisclaimerModal.addEventListener('click', function (e)
    {
        e.stopPropagation();
    });

    cookiesPolicyAccess = document.getElementsByClassName('cookies-policy-access')[0];
    cookiesPolicyAccess.onclick = showCookiesDisclaimerModal;

    cookiesDisclaimerModalCloseButton = document.getElementsByClassName('close-button')[0];
    cookiesDisclaimerModalAcceptButton = document.getElementsByClassName('accept-button')[0];
    cookiesDisclaimerModalCloseButton.onclick = hideCookiesDisclaimerModal;
    cookiesDisclaimerModalAcceptButton.addEventListener('click', function (e)
    {
        agreeCookies();
        hideCookiesDisclaimerModal();
    });

}

function evalAgreementCookie()
{
    let cookie = getCookie('cookiesAgree');
    if (!cookie)
    {
        showCookiesDisclaimer();
        unloadGoogleMaps();
    }
    else
    {
        agreeCookies();
    }
}

function agreeCookies()
{
    setCookie('cookiesAgree', 'true');
    hideCookiesDisclaimer();
    loadGoogleMaps();
    googleMapsNoCookiesDiv.style.display = 'none';
    cookiesDisclaimerModalAcceptButton.style.display = 'none';
}

function rejectCookies()
{
    document.cookie = 'cookiesAgree=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Strict';
    hideCookiesDisclaimer();
    unloadGoogleMaps();
    googleMapsNoCookiesDiv.style.display = 'block';
    cookiesDisclaimerModalAcceptButton.style.display = 'none';
}

function showCookiesDisclaimer()
{
    googleMapsNoCookiesDiv.style.display = 'block';
    cookiesDisclaimerDiv.style.display = 'block';
}

function hideCookiesDisclaimer()
{
    cookiesDisclaimerDiv.style.display = 'none';
}

function setCookie(name, value)
{
    let expiration_date = new Date();
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);
    document.cookie = name + '=' + value + '; path=/; expires=' + expiration_date.toUTCString() + '; SameSite=Strict';
}

function getCookie(name)
{
    name += '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++)
    {
        let c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function loadGoogleMaps()
{
    googleMapsIframe.style.display = 'block';
    googleMapsIframe.src = googleMapsIframe.dataset.src;
}

function unloadGoogleMaps()
{
    googleMapsIframe.style.display = 'none';
}

function showCookiesDisclaimerModal()
{
    cookiesDisclaimerModalWrapper.classList.remove('hidden');
    cookiesDisclaimerModalWrapper.classList.add('visible');
}

function hideCookiesDisclaimerModal()
{
    cookiesDisclaimerModalWrapper.classList.remove('visible');
    cookiesDisclaimerModalWrapper.classList.add('hidden');
}

window.onload = function ()
{
    init();
};