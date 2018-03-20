#ifndef DEFINE_H
#define DEFINE_H

#include <iostream>
#include <string>

#define EOS      '\0'
#define ASIZE    128
#define STRING   "GCATCGCAGAGAGTATACAGTACG"
#define PATTERN1 "GCAGAGAG" // Matching in index 5
#define PATTERN2 "GCAGAGAC" // Never matching

#define __TEST__(...)                             \
  int main(int argc, char *argv[])                \
  {                                               \
    using namespace std;                          \
    __VA_ARGS__;                                  \
    return 0;                                     \
  }

#define __FUNC__(f)                                         \
  cout << #f << " (should matching and index must be 5): "; \
  cout << f(PATTERN1, 8, STRING, 24) << endl;               \
  cout << #f << " (never mathcing): ";                      \
  cout << f(PATTERN2, 8, STRING, 24) << endl;

#define TEST1(f1)         __TEST__(__FUNC__(f1))
#define TEST2(f1, f2)     __TEST__(__FUNC__(f1) __FUNC__(f2))
#define TEST3(f1, f2, f3) __TEST__(__FUNC__(f1) __FUNC__(f2) __FUNC__(f3))

#endif // DEFINE_H
