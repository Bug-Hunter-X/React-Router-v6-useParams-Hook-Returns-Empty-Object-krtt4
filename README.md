# React Router v6 useParams Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6. The problem arises when attempting to access route parameters from a component that's not directly nested within the route defining those parameters.

## Problem

The `useParams` hook in React Router v6 only provides access to route parameters within components directly nested under the route where those parameters are defined.  If you try to access parameters from a component that's several levels deep without proper nesting or prop drilling, the hook returns an empty object, resulting in errors or unexpected behavior.

## Solution

The solution involves restructuring your component hierarchy or passing the parameters down as props through parent components.  This ensures that the parameters are available in the correct context.