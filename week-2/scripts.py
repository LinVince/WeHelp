#####first question####

def calculate(min, max, step):
  numList = []
  i = 1  
  while True:
    if min + step * i > max:
      break
    numList.append(min + step*i)
    i += 1  
  return (min + sum(numList))
  
               
calculate (1, 3, 1)
calculate (4, 8, 2)
calculate (-1, 2, 2)


#####second question####
def avg(data):
  count = 0
  salary = 0
  for i in data['employees']:
    if i['manager'] == False:
      salary += i['salary']
      count += 1
  return (salary/count)

avg({
"employees":[
{
"name":"John",
"salary":30000,
"manager":False
},
{
"name":"Bob",
"salary":60000,
"manager":True
},
{
"name":"Jenny",
"salary":50000,
"manager":False
},
{
"name":"Tony",
"salary":40000,
"manager":False
}
]
})

#####thrid question####
def func(a):
  def seed(b,c):
    result = a + b*c
    print (result)
  return seed
  
func(2)(3,4)
func(5)(1,-5)
func(-3)(2,9)


####forth question####
def maxProduct(nums):
  num = int()
  max = float("-inf")
  for i in nums:
    for a in nums:
      if nums.index(i) != nums.index(a):
        num = i * a
        if num > max:
          max = num
        else:
          continue
      else:
        continue

  return max

maxProduct([5, 20, 2, 6]) # 得到 120
maxProduct([10, -20, 0, 3]) # 得到 30
maxProduct([10, -20, 0, -3]) # 得到 60
maxProduct([-1, 2]) # 得到 -2
maxProduct([-1, 0, 2]) # 得到 0
maxProduct([5,-1, -2, 0]) # 得到 2
maxProduct([-5, -2]) # 得到 10

####fifth question####
def twoSum(nums, target):
  for i in nums:
    for a in nums:
      if nums.index(i) != nums.index(a) and i + a == target:
        return ([nums.index(i),nums.index(a)])



result = twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9



####sixth question####
def maxZeros(nums):
  count = 0
  max = 0
  for i in nums:
    if i == 0:
      count += 1
      if count > max:
        max = count
    if i == 1:
      if count > max:
        max = count
      count = 0

  print (max)
      


# 請用你的程式補完這個函式的區塊
maxZeros([0, 1, 0, 0]) # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) # 得到 4
maxZeros([1, 1, 1, 1, 1]) # 得到 0
maxZeros([0, 0, 0, 1, 1]) # 得到 3
