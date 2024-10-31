export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LEVEL_ALL"] = 0] = "LEVEL_ALL";
    LogLevel[LogLevel["LEVEL_VERBOSE"] = 0] = "LEVEL_VERBOSE";
    LogLevel[LogLevel["LEVEL_DEBUG"] = 1] = "LEVEL_DEBUG";
    LogLevel[LogLevel["LEVEL_INFO"] = 2] = "LEVEL_INFO";
    LogLevel[LogLevel["LEVEL_WARNING"] = 3] = "LEVEL_WARNING";
    LogLevel[LogLevel["LEVEL_ERROR"] = 4] = "LEVEL_ERROR";
    LogLevel[LogLevel["LEVEL_FATAL"] = 5] = "LEVEL_FATAL";
    LogLevel[LogLevel["LEVEL_NONE"] = 6] = "LEVEL_NONE";
})(LogLevel || (LogLevel = {}));
