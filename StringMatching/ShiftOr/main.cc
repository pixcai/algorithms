#include "../define.h"

unsigned int preSO(const char *x, int m, unsigned int B[])
{
  unsigned int j, lim;
  int i;

  for (i = 0; i < ASIZE; ++i)
  {
    B[i] = ~0;
  }
  for (lim = i = 0, j = 1; i < m; ++i, j <<= 1)
  {
    B[x[i]] &= ~j;
    lim |= j;
  }
  lim = ~(lim >> 1);

  return lim;
}

int SO(const char *x, int m, const char *y, int n)
{
  unsigned int B[ASIZE], D = ~0, lim;

  lim = preSO(x, m, B);

  for (int i = 0; i < n; ++i)
  {
    D = (D << 1) | B[y[i]];
    if (D < lim)
    {
      return i - m + 1;
    }
  }

  return -1;
}

TEST1(SO);
