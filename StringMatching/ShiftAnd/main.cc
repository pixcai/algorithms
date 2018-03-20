#include "../define.h"

void preSA(const char *x, int m, unsigned int B[])
{
  int i;

  for (i = 0; i < ASIZE; ++i)
  {
    B[i] = 0;
  }
  for (i = 0; i < m; ++i)
  {
    B[x[i]] |= 1 << i;
  }
}

int SA(const char *x, int m, const char *y, int n)
{
  unsigned int B[ASIZE], D = 0, mask = 1 << (m - 1);

  preSA(x, m, B);

  for (int i = 0; i < n; ++i)
  {
    D = ((D << 1) | 1) & B[y[i]];
    if (D & mask)
    {
      return i - m + 1;
    }
  }

  return -1;
}

TEST1(SA);
