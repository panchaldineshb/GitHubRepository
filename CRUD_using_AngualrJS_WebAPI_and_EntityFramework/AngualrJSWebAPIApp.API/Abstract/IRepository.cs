﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AngualrJSWebAPIApp.API.Abstract
{
    public interface IRepository<T> where T : class
    {
        Task<int> AddAsync(T t);

        Task<int> RemoveAsync(T t);

        Task<List<T>> GetAllAsync();

        Task<int> UpdateAsync(T t);

        Task<int> CountAsync();

        Task<T> FindAsync(Expression<Func<T, bool>> match);

        Task<List<T>> FindAllAsync(Expression<Func<T, bool>> match);

        int Add(T t);

        int Remove(T t);

        IQueryable<T> GetAll();

        int Update(T t);

        int Count();

        T Find(Expression<Func<T, bool>> match);

        IQueryable<T> FindAll(Expression<Func<T, bool>> match);
    }
}