if (typeof ACME == "undefined" || !ACME) {
    var ACME = {};
}
ACME.forms = ACME.forms || {};
ACME.forms.validation = ACME.forms.validation || {};

ACME.forms.validation.cannotContainOne = function cannotContainOne(field, args, event, form, silent, message) {
    var valid = true;

    valid = YAHOO.lang.trim(field.value).length !== 0;
    if (valid) {
        if (field.value.indexOf("one") >= 0) {
            valid = false;
        }

        return valid;
    }
}
ACME.forms.validation.cannotContainTwo = function cannotContainTwo(field, args, event, form, silent, message) {
    var valid = true;

    valid = YAHOO.lang.trim(field.value).length !== 0;
    if (valid) {
        if (field.value.indexOf("two") >= 0) {
            valid = false;
        }

        return valid;
    }
}
ACME.forms.validation.cannotContainThree = function cannotContainThree(field, args, event, form, silent, message) {
    var valid = true;

    valid = YAHOO.lang.trim(field.value).length !== 0;
    if (valid) {
        if (field.value.indexOf("three") >= 0) {
            valid = false;
        }

        return valid;
    }
}
ACME.forms.validation.chooseTwoOrFewer = function chooseTwoOrFewer(field, args, event, form, silent, message) {
    var valid = true;

    valid = YAHOO.lang.trim(field.value).length !== 0;
    if (valid) {
        var vals = field.value.split(',');
        if (vals.length > 2) {
            valid = false;
        }
    }
    return valid;
}
