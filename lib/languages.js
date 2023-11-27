"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScannedLanguage = exports.isTracedLanguage = exports.parseLanguage = exports.LANGUAGE_ALIASES = exports.Language = void 0;
// All the languages supported by CodeQL
var Language;
(function (Language) {
    Language["csharp"] = "csharp";
    Language["cpp"] = "cpp";
    Language["go"] = "go";
    Language["java"] = "java";
    Language["javascript"] = "javascript";
    Language["python"] = "python";
    Language["ruby"] = "ruby";
    Language["swift"] = "swift";
    Language["xml"] = "xml";
    Language["yaml"] = "yaml";
})(Language || (exports.Language = Language = {}));
// Additional names for languages
exports.LANGUAGE_ALIASES = {
    c: Language.cpp,
    "c++": Language.cpp,
    "c#": Language.csharp,
    kotlin: Language.java,
    typescript: Language.javascript,
};
/**
 * Translate from user input or GitHub's API names for languages to CodeQL's
 * names for languages.
 *
 * @param language The language to translate.
 * @returns A language supported by CodeQL, an alias for a language, or
 * `undefined` if the input language cannot be parsed into a language supported
 * by CodeQL.
 */
function parseLanguage(language) {
    // Normalise to lower case
    language = language.trim().toLowerCase();
    // See if it's an exact match
    if (language in Language) {
        return language;
    }
    // Check language aliases, but return the original language name,
    // the alias will be resolved later.
    if (language in exports.LANGUAGE_ALIASES) {
        return exports.LANGUAGE_ALIASES[language];
    }
    return undefined;
}
exports.parseLanguage = parseLanguage;
function isTracedLanguage(language) {
    return [
        Language.cpp,
        Language.csharp,
        Language.go,
        Language.java,
        Language.swift,
    ].includes(language);
}
exports.isTracedLanguage = isTracedLanguage;
function isScannedLanguage(language) {
    return !isTracedLanguage(language);
}
exports.isScannedLanguage = isScannedLanguage;
//# sourceMappingURL=languages.js.map