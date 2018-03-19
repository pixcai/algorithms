#include <iostream>
#include <string>
#include "../define.h"

int BFv1(const char *x, int m, const char *y, int n)
{
  int i, j;

  for (i = 0; i <= n - m; ++i)
  {
    for (j = 0; j < m && x[j] == y[i + j]; j++);
    if (j >= m)
    {
      return i;
    }
  }

  return -1;
}

int BFv2(const char *x, int m, const char *y, int n)
{
  const char *z = y;

  for (z = y; *y != EOS; ++y)
  {
    if (memcmp(x, y, m) == 0)
    {
      return y - z;
    }
  }

  return -1;
}

int main() {
  const char *w = "do";
  const char *x = "or";
  const char *y = "hello world";

  std::cout << BFv1(w, 2, y, 11) << std::endl;
  std::cout << BFv2(w, 2, y, 11) << std::endl;
  std::cout << BFv1(x, 2, y, 11) << std::endl;
  std::cout << BFv2(x, 2, y, 11) << std::endl;

  return 0;
}
