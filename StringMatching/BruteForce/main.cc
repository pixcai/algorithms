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

TEST2(BFv1, BFv2);
