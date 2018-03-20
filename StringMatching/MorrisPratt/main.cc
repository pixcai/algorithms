#include "../define.h"

void preMP(const char *x, int m, int next[])
{
  int i = 0, j;

  j = next[0] = -1;
  while (i < m)
  {
    while (j > -1 && x[i] != x[j])
    {
      j = next[j];
    }
    next[++i] = ++j;
  }
}

int MP(const char *x, int m, const char *y, int n)
{
  int i = 0, j = 0, next[m];

  preMP(x, m, next);
  
  while (i < n)
  {
    while (j > -1 && x[j] != y[i])
    {
      j = next[j];
    }
    i++;
    j++;
    if (j >= m)
    {
      return i - j;
    }
  }

  return -1;
}

TEST1(MP);
