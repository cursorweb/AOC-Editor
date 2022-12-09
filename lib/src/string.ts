interface String {
    /**
     * Return the characters of the string
     */
    chars(): String[];

    /**
     * Like the python ord function
     */
    ord(): number;
}

String.prototype.chars = function() {
    return (this as string).split("");
}

String.prototype.ord = function() {
    return (this as string).charCodeAt(0);
}