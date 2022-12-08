interface String {
    chars(): String[];
}

String.prototype.chars = function() {
    return this.split("");
}