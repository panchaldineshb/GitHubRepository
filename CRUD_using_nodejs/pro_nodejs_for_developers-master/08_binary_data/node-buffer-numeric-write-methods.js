var buf = new Buffer(16);

// writeDoubleLE write Double number in little-endian format
// and takes 3 arguments: value, offset and validation indicator
// if validation = true writting to big value will fail
// otherwise it will be truncated and fail silently
buf.writeDoubleLE(3.14, 0, true);