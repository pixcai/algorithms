function deleteDuplicates(head) {
  let i = head;

  if (head === null) {
    return head
  }

  while (i.next) {
    if (i.next.val === i.val) {
      i.next = i.next.next
    } else {
      i = i.next
    }
  }

  return head
}
