function addTwoNumbers(L1, L2) {
  let result = null

  if (L1 && L2) {
    result = new ListNode(L1.val + L2.val)

    if (result.val > 9) {
      result.next = addTwoNumbers(
        new ListNode(1),
        addTwoNumbers(L1.next, L2.next)
      )
    } else {
      result.next = addTwoNumbers(L1.next, L2.next)
    }
    result.val = result.val % 10
  } else if (L1 && !L2) {
    result = L1
  } else if (!L1 && L2) {
    result = L2
  }

  return result
}

