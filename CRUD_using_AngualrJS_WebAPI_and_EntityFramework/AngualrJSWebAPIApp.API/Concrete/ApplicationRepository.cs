using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AngualrJSWebAPIApp.API.Abstract;
using AngualrJSWebAPIApp.DAL.Context;

namespace AngualrJSWebAPIApp.API.Concrete
{
    public class ApplicationRepository<T> : IRepository<T> where T : class
    {
        private readonly AngualrJSWebAPIAppDbContext _dbContext;

        public ApplicationRepository(AngualrJSWebAPIAppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> AddAsync(T t)
        {
            _dbContext.Set<T>().Add(t);
            return await _dbContext.SaveChangesAsync();
        }

        public async Task<int> RemoveAsync(T t)
        {
            _dbContext.Entry(t).State = EntityState.Deleted;
            return await _dbContext.SaveChangesAsync();
        }

        public async Task<int> UpdateAsync(T t)
        {
            _dbContext.Entry(t).State = EntityState.Modified;
            return await _dbContext.SaveChangesAsync();
        }

        public async Task<int> CountAsync()
        {
            return await _dbContext.Set<T>().CountAsync();
        }

        public async Task<List<T>> GetAllAsync()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public async Task<T> FindAsync(Expression<Func<T, bool>> match)
        {
            return await _dbContext.Set<T>().SingleOrDefaultAsync(match);
        }

        public async Task<List<T>> FindAllAsync(Expression<Func<T, bool>> match)
        {
            return await _dbContext.Set<T>().Where(match).ToListAsync();
        }

        public int Add(T t)
        {
            _dbContext.Set<T>().Add(t);
            return _dbContext.SaveChanges();
        }

        public int Remove(T t)
        {
            _dbContext.Entry(t).State = EntityState.Deleted;
            return _dbContext.SaveChanges();
        }

        public int Update(T t)
        {
            _dbContext.Entry(t).State = EntityState.Modified;
            return _dbContext.SaveChanges();
        }

        public int Count()
        {
            return _dbContext.Set<T>().Count();
        }

        public IQueryable<T> GetAll()
        {
            return _dbContext.Set<T>().AsQueryable();
        }

        public T Find(Expression<Func<T, bool>> match)
        {
            return _dbContext.Set<T>().SingleOrDefault(match);
        }

        public IQueryable<T> FindAll(Expression<Func<T, bool>> match)
        {
            return _dbContext.Set<T>().Where(match);
        }
    }
}