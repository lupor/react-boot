export function unwrapHalList(payload) {
  if (payload && payload.content) {
    return payload.content;
  }
}
