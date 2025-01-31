// Enums
// Enums allow us to define a set of named constants i.e. a collection of related values that can be numeric or string values.
// Enums are defined using the enum keyword.

// Numeric enums

enum Direction {
  East, // 0
  West, // 1
  North, // 2
  South, // 3
}
let dir: Direction = Direction.North; // 2 is the index of North in the Direction enum list above (0, 1, 2, 3)
console.log(dir); // 2 (index of North)

// String enums
// In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
// String enums are a similar concept to numeric enums, except that the enum values are initialized with string values rather than numeric values.

enum DirectionString {
  East = "EAST",
  West = "WEST",
  North = "NORTH",
  South = "SOUTH",
}
let dirString: DirectionString = DirectionString.North;
console.log(dirString); // NORTH

// Heterogeneous enums
// Heterogeneous enums are enums that contain both string and numeric values.
// This is not recommended as it makes code confusing.

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
console.log(BooleanLikeHeterogeneousEnum.Yes); // YES

// Computed and constant members
// Each enum member has a value associated with it which can either be constant or computed.
// An enum member is considered constant if:
// It is the first member in the enum and it has no initializer, in which case it’s assigned the value 0:
// enum E { X }
// It does not have an initializer and the preceding enum member was a numeric constant. In this case the value of the current enum member will be the value of the preceding enum member plus one.
// enum E { X, Y, Z }
// Y is 1, Z is 2
// The enum member is initialized with a constant enum expression. A constant enum expression is a subset of TypeScript expressions that can be fully evaluated at compile time.
// An expression is a constant enum expression if it is:
// A literal enum expression (basically a string literal or a numeric literal)
// A reference to previously defined constant enum member (which can originate from a different enum).
// Parenthesized constant enum expression
// +, -, ~ unary operators applied to constant enum expression
// +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions as operands
// No computed members are allowed in an enum with string valued members.
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
console.log(FileAccess.G); // 3
