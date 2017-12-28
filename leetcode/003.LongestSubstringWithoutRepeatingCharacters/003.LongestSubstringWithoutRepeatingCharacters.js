// 解法一
function lengthOfLongestSubstring1(s) {
  const sub = new Set([...s])
  const N = s.length
  let len = sub.size

  if (sub.size !== N) {
    len = 0

    for (let i = 0; i < N; i++) {
      sub.clear()
      sub.add(s[i])
      for (let j = i + 1; j < N; j++) {
        if (sub.has(s[j])) {
          break
        } else {
          sub.add(s[j])
        }
      }
      if (sub.size > len) {
        len = sub.size
      }
    }
  }

  return len
}

// 解法二
function lengthOfLongestSubstring2(s) {
  let sub = ''
  let len = 0

  for (let i = 0; i < s.length; i++) {
    const j = sub.indexOf(s[i])

    if (j === -1) {
      sub += s[i]
    } else {
      if (sub.length > len) {
        len = sub.length
      }
      sub = sub.substr(j + 1) + s[i]
    }
  }
  if (sub.length > len) {
    len = sub.length
  }

  return len
}

