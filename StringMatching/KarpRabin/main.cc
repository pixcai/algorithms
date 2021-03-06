#include "../define.h"

#define REHASH(a, b, h) ((((h) - (a) * d) << 1) + (b))

int KR(const char *x, int m, const char * y, int n)
{
  int d, i, j = 0, u = 0, v = 0;

  for (d = i = 1; i < m; ++i)
  {
    d = d << 1;
  }
  for (i = 0; i < m; ++i)
  {
    u = (u << 1) + x[i];
    v = (v << 1) + y[i];
  }
  while (j <= n - m)
  {
    if (u == v && memcmp(x, y + j, m) == 0)
    {
        return j;
    }
    v = REHASH(y[j], y[j + m], v);
    ++j;
  }

  return -1;
}

TEST1(KR);
