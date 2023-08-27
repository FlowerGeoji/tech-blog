---
title: React-query로 비동기 통신 관리
date: 2022-08-03 23:35:00
category: react
thumbnail: { thumbnailSrc }
draft: false
---

회사에서 새로운 프로젝트를 진행할 때마다 항상 크게 고민했던 부분은 **상태 관리를 어떻게 할까?** 였습니다. 과거 프로젝트는 매번 Redux로 상태를 관리하고 사이드이펙트들은 Redux-saga나 Redux-thunk, Redux-ovservable로 처리했었습니다. 그러다가 이번에 [React-Query](https://tanstack.com/query/v4)를 알게 되었고 이를 사용해서 프로젝트를 진행한 경험에 대해서 이야기하고자 합니다.

# React-Query

> While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state. This is because server state is totally different.

React-Query의 컨셉을 간단하게 이야기하자면, **서버사이드 상태 관리에 집중하자.** 입니다. 기존의 상태 관리 라이브러리에서는 보통 클라이언트 전체 상태와 서버사이드에서 전달받는 상태를 한꺼번에 핸들링 했었는데요. 

**React-Query는 이런 방식이 효율적이지도 않고 너무 복잡하며, 서버사이드의 상태와 클라이언트 사이드의 상태는 완전히 다른 성질의 것이기 때문에 따로 관리해야 한다고 이야기하고 있습니다.**

# React-Query 장점

##### 서버사이드 상태 관리와 관련된 여러 가지 반복적인 작업들을 손쉽게 처리할 수 있습니다.

- 데이터뿐만 아니라 `isIdle`, `isLoading`, `isFetching`, `isSuccess`, `isError`등과 같은 여러 가지 부가적인 상태 값들도 제공
- query key를 통하여 데이터 캐싱과 각 쿼리 간에 디펜던시 조작도 손쉽게 할 수 있다.
- `useEffect`로 처리했던 여러 가지 상황들을 `refetchOnMount`, `refetchOnReconnect`, `refetchOnWindowFocus`와 같은 옵션으로 쉽게 처리할 수 있다.
- `keepPreviousData` 옵션이나 `useInfiniteQuery`를 사용하여 페이징 기능도 쉽게 구현할 수 있다.
- `useQueries`를 사용하여 병렬처리가 가능하다.

##### React Context와 Hook으로 구성되어 있어 React 사용자들에게 매우 친숙합니다.

- 별도의 러닝 커브가 필요하지 않습니다.
- Redux-saga에서 사용하는 여러 가지 saga 명령어들과 Generator 개념이나, React-observable에서 사용하는 RxJS와 같은 추가적인 개념들을 공부하지 않아도 됩니다.

##### Suspense도 쉽게 사용할 수 있습니다.

##### GraphQL과도 사용할 수 있습니다.

- https://tanstack.com/query/v4/docs/graphql

##### SSR에서 사용할 수 있는 방법도 지원하고 있습니다.

- https://tanstack.com/query/v4/docs/guides/ssr

# React-Query 살펴보기

예제를 통해서 React-Query를 좀 더 자세히 살펴보도록 하겠습니다.

### Query

React-Query에서 쿼리(useQuery)는 서버 데이터를 가져와서 상태 관리하는 데 사용되며, QueryKey와 QueryFunction으로 구성되어 있습니다. **QueryKey는 필수는 아니지만 데이터 캐싱을 처리하는 기준이 됩니다.** QueryFunction은 서버 데이터를 가져오는 함수로 promise를 반환해야 합니다.

```tsx
function fetchTodoList() {
    // return promise
    return axios.get("/todos")
}

function TodosTitle() {
  const todosQuery = useQuery(['todos'], fetchTodoList)

  if (todosQuery.isLoading) {
    return <span>Loading...</span>
  }

  return (
    <ul>
      {todosQuery.data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

function TotodsBody() {
    const todosQuery = useQuery(['todos'], fetchTodoList)

    if (todosQuery.isError) {
        return <span>Error: {todosQuery.error.message}</span>
    }

    return (
        <ul>
        {todosQuery.data.map(todo => (
            <li key={todo.id}>{todo.body}</li>
        ))}
        </ul>
    )
}
```

위 예제 코드에서 ``TodosTitle`` 컴포넌트 ``TodosBody`` 컴포넌트가 ``['todos']``값으로 동일한 쿼리키를 사용하고 있습니다. 만약 ``TodosTitle`` 컴포넌트가 먼저 호출되고 쿼리가 실행되어 데이터를 가져온다면, ``['todos']``쿼리키 값으로 해당 데이터가 캐싱이 되고, 이후에 ``TodosBody`` 컴포넌트가 호출되면 다시 서버 데이터를 요청하지 않고 캐싱 된 데이터를 바로 가져와서 사용하게 됩니다. 마찬가지로 다시 ``TodosTitle`` 컴포넌트가 제 호출되어도 서버 데이터를 요청하지 않고 캐싱 된 데이터를 바로 사용할 수 있습니다.

여러 개의 쿼리를 사용하면 [병렬적으로 처리](https://tanstack.com/query/v4/docs/guides/parallel-queries)가 되며, 또한 쿼리키에 다른 쿼리키 값을 넣어 쿼리 간에 디펜던시를 형성하여 사용할 수도 있습니다.

```tsx
// Get the user
const { data: user } = useQuery(['user', email], getUserByEmail)

const userId = user?.id

// Then get the user's projects
const { status, fetchStatus, data: projects } = useQuery(
  ['projects', userId],
  getProjectsByUser,
  {
    // The query will not execute until the userId exists
    enabled: !!userId,
  }
)
```

이외에도 쿼리키와 여러 가지 옵션을 사용하여 [페이징 처리](https://tanstack.com/query/v4/docs/guides/paginated-queries)나 화면 스크롤로 호출되는 [인피니티  쿼리](https://tanstack.com/query/v4/docs/guides/infinite-queries) 등 다양한 쿼리 기능들을 제공하고 있습니다.

### Mutation

React-Query에서 서버 데이터에 영향을 주는(Server side-effects) `create`/`update`/`delete` 호출은 Mutation을 사용하고 있습니다.

```tsx
function App() {
  const todoMutation = useMutation(["/todos"], newTodo => {
    return axios.post("/todos", newTodo)
  })

  const onClickButton = function() {
    mutation.mutate({ id: new Date(), title: "Do Homework" })
  }

  return (
    <div>
      {todoMutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {todoMutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {todoMutation.isSuccess ? <div>Todo added!</div> : null}

          <button onClick={onClickButton}>
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
```

쿼리와 마찬가지로 필수 값이 아닌 MutationKey와 프로미스를 반환하는 MutationFunction으로 구성되며, 키를 기준으로 뮤테이션 결과가 캐싱 됩니다. 

# React-Query 사용 후기 및 주의점

### 서버 상태 관리가 아주 편해집니다.

이번에 진행했던 프로젝트는 백오피스 어플리케이션이었기 때문에 사실 대부분의 기능들이 서버사이드의 상태 값을 전달받아 화면에 보여주거나 상태 값을 변경하는 요청을 전달하는 것이었고, 클라이언트 사이드의 상태를 다뤄야 하는 경우는 크게 없었습니다. 그래서 React-Query만으로도 손쉽게 대부분의 사이드 이펙트와 상태 관리를 처리할 수 있었습니다.

Redux 미들웨어들도 다양하고 좋은 기능들을 제공해 주긴 하지만, 서버 상태 관리는 React-query로 하고 어플리케이션 자체의 상태 관리는 Redux로 하는 방식으로 작업을 하면 좋은 시너지를 얻을 수 있지 않을까 싶습니다.

### QueryKey, MutationKey 관리를 잘 해야 합니다.

**React-Query는 항상 키값을 기준으로 사이드이펙트들이 처리됩니다.** 쿼리나 뮤테이션 호출과 결과 캐싱부터 시작해서 쿼리를 무효화(Invalidation) 시키는데도 키가 사용됩니다.

```ts
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries(['todos'])
```

그렇기 때문에 프로젝트 규모가 커진다면 React-query에서 사용하는 키값에 대해 컨벤션과 규칙을 정하고 사용하는 것이 좋습니다.

### 비즈니스 로직이 섞이는 것을 주의해야 합니다.

React-Query에서 쿼리나 뮤테이션을 호출할 때 옵션으로 onError, onSuccess를 설정할 수 있고 컴포넌트단에서 useQueryClient를 통하여 직접 쿼리나 뮤테이션을 무효화(invalidation) 시킬 수 있습니다.

```tsx
const App:React.FC<IAppPRops> = function() {
    // useQueryClient
    const queryClient = useQueryClient()

    // callback - onSubmit delete
    const _onSubmit: FormEventHandler = function () {
        deleteOperator.mutate(
            { operatorId: operator?.id },
            {
                onError: (error) => {
                    alert(error.detail)
                },
                onSuccess(data, variables, context) {
                    queryClient.invalidateQueries(["users"])
                    setData(data)
                },
            }
        )
    }

    // ....... /
}
```

이는 자칫 잘못하면 비즈니스 로직이 컴포넌트단이나 useQuery, useMutation 함수 내에 분산될 수 있으며 이는 프로젝트가 커질수록 로직을 파악하는데 많은 불편함을 유발할 수 있습니다.