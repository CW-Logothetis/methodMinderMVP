export const numberGroups = [

    {
        category: "Static Methods",
        description: "Methods available on the Number constructor itself, useful for checking number properties and parsing strings into numbers.",
        methods: [
            { id: 1, name: "isFinite", method: "isFinite()", description: "determines whether the passed value is a finite number" },
            { id: 2, name: "isInteger", method: "isInteger()", description: "determines whether the passed value is an integer" },
            { id: 3, name: "isNaN", method: "isNaN()", description: "determines whether the passed value is NaN (Not-a-Number)" },
            { id: 4, name: "isSafeInteger", method: "isSafeInteger()", description: "determines whether the passed value is a safe integer (number between -(2^53 - 1) and 2^53 - 1)" },
            { id: 5, name: "parseFloat", method: "parseFloat()", description: "parses a string argument and returns a floating point number" },
            { id: 6, name: "parseInt", method: "parseInt()", description: "parses a string argument and returns an integer of the specified radix" },
        ]
    },

    {
        category: "Instance Methods",
        description: "Methods available on number instances, useful for formatting and converting numbers.",
        methods: [
            { id: 15, name: "toExponential", method: "toExponential()", description: "returns a string representing the number in exponential notation" },
            { id: 16, name: "toFixed", method: "toFixed()", description: "returns a string representing the number in fixed-point notation" },
            { id: 17, name: "toLocaleString", method: "toLocaleString()", description: "returns a string with a language-sensitive representation of the number" },
            { id: 18, name: "toPrecision", method: "toPrecision()", description: "returns a string representing the number to a specified precision" },
            { id: 19, name: "toString", method: "toString()", description: "returns a string representing the specified number object" },
            { id: 20, name: "valueOf", method: "valueOf()", description: "returns the primitive value of the specified number object" },
        ]
    },

    {
        category: "Static Properties",
        description: "Properties available on the Number constructor itself, useful for accessing constants and special values related to numbers.",
        methods: [
            { id: 7, name: "EPSILON", method: "EPSILON", description: "the smallest interval between two representable numbers" },
            { id: 8, name: "MAX_SAFE_INTEGER", method: "MAX_SAFE_INTEGER", description: "the maximum safe integer in JavaScript (2^53 - 1)" },
            { id: 9, name: "MAX_VALUE", method: "MAX_VALUE", description: "the largest positive representable number" },
            { id: 10, name: "MIN_SAFE_INTEGER", method: "MIN_SAFE_INTEGER", description: "the minimum safe integer in JavaScript (-(2^53 - 1))" },
            { id: 11, name: "MIN_VALUE", method: "MIN_VALUE", description: "the smallest positive representable number (closest to zero)" },
            { id: 12, name: "NaN", method: "NaN", description: "special value representing Not-a-Number" },
            { id: 13, name: "NEGATIVE_INFINITY", method: "NEGATIVE_INFINITY", description: "special value representing negative infinity" },
            { id: 14, name: "POSITIVE_INFINITY", method: "POSITIVE_INFINITY", description: "special value representing positive infinity" },
        ]
    },

];